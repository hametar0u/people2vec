from django.shortcuts import render
from django.http import HttpResponse
import pandas as pd
import re
from users.models import User

# Create your views here.
def index(request):
    return HttpResponse("hello world")

def login(request):
    user = User.get(username = request.username, password = request.password)
    if not user:
        return HttpResponse("user not found", status_code=404)
    
    else:
        return HttpResponse("logged in", status_code=200)
    
    
def direct_html_parser(html, username):
    # with open(html_path, 'r', encoding='utf-8') as f:
    #     html = f.read()
    results = re.findall('content-cell mdl-cell mdl-cell--6-col mdl-typography--body-1.*?</div>', html)
    data = []
    for line in results:
        try:
            link, title, channel, time = re.findall('(https://www\.youtube\.com/watch.*?)>(.*?)<.*?https://www.youtube.com/channel.*?">(.*?)</a><br>(.*?)</div>', line)[0]
            video_id = re.findall('/watch\?v=(.*?)"$', link)[0]
            thumbnail = f'https://img.youtube.com/vi/{video_id}/0.jpg'
            screenshot_1 = f'https://img.youtube.com/vi/{video_id}/1.jpg'
            screenshot_2 = f'https://img.youtube.com/vi/{video_id}/2.jpg'
            screenshot_3 = f'https://img.youtube.com/vi/{video_id}/3.jpg'
            data.append([title, channel, time, link, video_id, thumbnail, screenshot_1, screenshot_2, screenshot_3])        
        except:
            pass
    data = pd.DataFrame(data, columns = ["title", "channel", "time", "link", 'video_id', 'thumbnail', 'screenshot_1', 'screenshot_2', 'screenshot_3'])
    data.to_csv(f"./data/raw_data/{username}.tsv", index=None, sep='\t')


def signup(request):
    # do some parsing shit
    print(request.data[:1000])
    try:
        direct_html_parser(html=request.data, username=request.username)
        user = User(username = request.username, 
                    password = request.password, 
                    age = request.age, 
                    latitude = request.latitude,
                    longitude = request.longitude,
                    statistics_link = request.statistics_link
                    )
        
        user.save()

        return HttpResponse("account created")
    except:
        return HttpResponse("Sum Ting Wong", status_code=500)