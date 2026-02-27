from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    full_name = serializers.ReadOnlyField()
    roles = serializers.SlugRelatedField(
        many=True, read_only=True, slug_field="name", source="groups"
    )

    class Meta:
        model = User
        fields = ["id", "username", "full_name", "phone", "roles"]
