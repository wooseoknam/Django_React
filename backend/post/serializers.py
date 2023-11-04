from rest_framework import serializers
from .models import User
# from drf_extra_fields.fields import Base64ImageField 

class UserSerializer(serializers.ModelSerializer):
    name = serializers.CharField(allow_null=False)
    age = serializers.IntegerField(allow_null=False)
    image = serializers.ImageField(use_url=True, allow_null=True)
    class Meta:
        model = User
        fields = ('id', 'name', 'age', 'image')
        