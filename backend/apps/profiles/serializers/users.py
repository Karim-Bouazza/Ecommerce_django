from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    full_name = serializers.CharField()

    class Meta:
        model = User
        fields = ["id", "username", "full_name", "email", "phone"]
