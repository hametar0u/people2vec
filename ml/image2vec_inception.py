import io
import os
import random
from urllib import request

import numpy as np
from PIL import Image
import torch
from torch import nn
from torchvision import models, transforms
from tqdm.auto import tqdm

import evaluation


device = torch.device("cuda:0") if torch.cuda.is_available() else torch.device("cpu")

inception_v3 = models.inception_v3(weights="IMAGENET1K_V1")
inception_v3.fc = nn.Identity()
inception_v3.to(device)
inception_v3.eval()

to_tensor = transforms.ToTensor()

pil_preprocess = lambda image: np.asarray(image.resize((1280, 720), Image.LANCZOS))
transform = transforms.Compose([
    transforms.Resize((299, 299), antialias=True),
    transforms.Normalize((0.485, 0.456, 0.406), (0.229, 0.224, 0.225))])


@torch.no_grad()
def image2vec(images):  # Expects image as NumPy array, uint8, [0, 255]
    images = torch.from_numpy(images).to(torch.float32).moveaxis(-1, -3) / 255
    images = transform(images).to(device)
    features = inception_v3(images).detach().cpu().numpy()
    return features


def link2vec(links, N=None):
    N = len(links) // 100 if N is None else N
    images = []
    progress = tqdm(total=N, desc="link2vec")
    i = 0
    while i < N:
        try:
            with request.urlopen(random.choice(links)) as url:
                file = io.BytesIO(url.read())
        except:
            continue
        image = pil_preprocess(Image.open(file))
        images.append(image)
        i += 1
        progress.update(1)
    images = np.stack(images, axis=0)
    features = image2vec(images)
    return features


if __name__ == "__main__":
    images_file = sorted(os.listdir("./data/thumbnails"))
    images = []
    for file in images_file:
        image = pil_preprocess(Image.open(f"./data/thumbnails/{file}"))
        images.append(np.copy(image))
    images = np.stack(images, axis=0)
    features = image2vec(images)
    
    for i in range(features.shape[0]):
        for j in range(i + 1, features.shape[0]):
            feature_1 = features[i]
            feature_2 = features[j]
            score = evaluation.cos_sim(feature_1, feature_2)
            print(f"{images_file[i]}\t{images_file[j]}\t{score}")
