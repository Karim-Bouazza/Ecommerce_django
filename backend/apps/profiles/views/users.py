from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView
from ..serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated

User = get_user_model()


class UserView(ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = (
        User.objects.exclude(groups__name="client")
        .prefetch_related("groups")
        .only("id", "username", "first_name", "last_name", "phone")
        .order_by("id")
    )
    serializer_class = UserSerializer
