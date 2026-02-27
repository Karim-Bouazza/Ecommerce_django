from rest_framework import serializers
from django.contrib.auth.models import Group


class RoleSerializer(serializers.ModelSerializer):
    users_count = serializers.IntegerField(read_only=True)

    class Meta:
        model = Group
        fields = ["id", "name", "users_count"]
        read_only_fields = ["id", "users_count"]
