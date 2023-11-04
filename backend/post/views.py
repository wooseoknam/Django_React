from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer
from .pagination import UserPageNumberPagination


class ListUser(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    pagination_class = UserPageNumberPagination

class DetailUser(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ListUserAll(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer