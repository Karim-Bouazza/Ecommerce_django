from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group

User = get_user_model()


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ["id", "name"]


class GroupToUserSerializer(serializers.ModelSerializer):
    groups = GroupSerializer(many=True, read_only=True)
    groups_ids = serializers.PrimaryKeyRelatedField(
        queryset=Group.objects.all(), many=True, write_only=True, source="groups"
    )

    class Meta:
        model = User
        fields = ["id", "groups_ids", "groups"]
