from django.contrib.auth.models import Group, Permission
from rest_framework import serializers
from apps.profiles.serializers import PermissionSerializer


class RolePermissionsSerializer(serializers.ModelSerializer):
    permissions_ids = serializers.PrimaryKeyRelatedField(
        queryset=Permission.objects.all(),
        many=True,
        write_only=True,
        source="permissions",
    )
    permissions = PermissionSerializer(many=True, read_only=True)

    class Meta:
        model = Group
        fields = ["id", "name", "permissions", "permissions_ids"]
        read_only_fields = ["id"]
