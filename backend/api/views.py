from django.shortcuts import render
from django.views import View
from django.conf import settings
from rest_framework.decorators import APIView
from rest_framework.response import Response
import requests
import argparse
import json


# Create your views here.

class YelpLocation(APIView):

    def get(self, request, *args, **kwargs):
        API_KEY= settings.API_KEY
        API_HOST = 'https://api.yelp.com/v3/businesses/search/'
        location = request.GET.get('location')
        headers = {
        'Accept' :'application/json',
        'Authorization': 'Bearer %s' % API_KEY,
        }
        params = {
        'location' : location,
        'term' : 'coffee'
        }
        response = requests.get('https://api.yelp.com/v3/businesses/search', params=params, headers=headers).json()
        return Response(response)
        

