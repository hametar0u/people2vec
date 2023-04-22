import argparse
import os
import random

import numpy as np
from scipy import linalg
import pandas as pd
from tqdm.auto import tqdm

import image2vec_inception as ivi
import text2vec_cohere as tvc


def cos_sim(vec_1, vec_2):
    assert vec_1.shape == vec_2.shape
    score = np.dot(vec_1, vec_2) / (np.linalg.norm(vec_1) * np.linalg.norm(vec_2))
    return score
  
  
def matrix_sqrt(x):
    x = linalg.sqrtm(x, disp=False)[0].real
    return x


def feature_statistics(f):
    mu = np.mean(f, axis=0)
    sigma = np.cov(f, rowvar=False)
    return mu, sigma


def frechet_distance(mu_1, sigma_1, mu_2, sigma_2, epsilon=1e-7):
    assert mu_1.shape == mu_2.shape
    assert sigma_1.shape == sigma_2.shape

    sse = np.sum(np.square(mu_1 - mu_2))
    covariance = matrix_sqrt(sigma_1 @ sigma_2)
        
    if np.isinf(covariance).any():
        I = np.eye(sigma_1.shape[0])
        covariance = matrix_sqrt(sigma_1 @ sigma_2 + epsilon * I)

    fid = sse + np.trace(sigma_1) + np.trace(sigma_2) - 2 * np.trace(covariance)
    return fid


def fid(f_1, f_2):
    # It is recommended, however, to compute feature_statistics only once and store the resulting
    # mu and sigma instead of recalculating it every time with this function
    assert f_1.shape == f_2.shape
    mu_1, sigma_1 = feature_statistics(f_1)
    mu_2, sigma_2 = feature_statistics(f_2)
    fid = frechet_distance(mu_1, sigma_1, mu_2, sigma_2)
    return fid


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("-N", "--num_top", default=100, type=int)
    parser.add_argument("-t", "--type", choices=["title", "thumbnail"],
                        default="title", type=str)
    parser.add_argument("-d", "--dir", default="data/watch_histories", type=str)
    args = parser.parse_args()
    
    histories_file = sorted(os.listdir(args.dir))
    data = []
    for file in histories_file:
        history = pd.read_csv(f"{args.dir}/{file}", sep="\t")[:args.num_top]
        data_ = history[args.type].tolist()
        data.append(data_)
    
    stats = []
    for data_ in tqdm(data):
        if args.type == "title":
            features = tvc.text2vec(data_)
        elif args.type == "thumbnail":
            features = ivi.link2vec(data_, N=args.num_top // 10)
        mu, sigma = feature_statistics(features)
        stats.append((mu, sigma))
    
    for i in range(len(stats)):
        for j in range(i + 1, len(stats)):
            mu_1, sigma_1 = stats[i]
            mu_2, sigma_2 = stats[j]
            fid = frechet_distance(mu_1, sigma_1, mu_2, sigma_2)
            print(f"{histories_file[i]}\t{histories_file[j]}\t{fid}")
