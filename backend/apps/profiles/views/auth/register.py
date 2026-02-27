from apps.utils.auth_jwt import set_auth_cookies
from rest_framework.generics import CreateAPIView
from ...serializers import RegisterSerializer
from django.contrib.auth import get_user_model
from rest_framework.permissions import AllowAny

User = get_user_model()


class RegisterView(CreateAPIView):
    permission_classes = [AllowAny]
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

    def perform_create(self, serializer):
        self.user = serializer.save()

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)

        return set_auth_cookies(response, self.user, request)
