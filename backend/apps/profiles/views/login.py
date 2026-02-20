from apps.profiles.serializers.login import LoginSerializer
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework.response import Response
from apps.utils.auth_jwt import set_auth_cookies
from rest_framework.permissions import AllowAny


class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serialize = LoginSerializer(data=request.data)
        serialize.is_valid(raise_exception=True)

        user = authenticate(
            username=request.data.get("username"), password=request.data.get("password")
        )

        if not user:
            return Response({"detail": "Invalid credentials"}, status=401)

        response = Response({"detail": "Login successful"})
        return set_auth_cookies(response, user, request)
