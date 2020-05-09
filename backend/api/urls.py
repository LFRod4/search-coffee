from django.contrib import admin
from django.urls import path, include
from .views import YelpLocation

urlpatterns = [
    path('', YelpLocation.as_view())
]