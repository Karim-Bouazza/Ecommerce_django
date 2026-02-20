from rest_framework_simplejwt.tokens import RefreshToken
from django.middleware.csrf import get_token


def set_auth_cookies(response, user, request):

    refresh = RefreshToken.for_user(user)
    access_token = str(refresh.access_token)
    refresh_token = str(refresh)

    response.set_cookie(
        key="refresh_token",
        value=refresh_token,
        httponly=True,
        secure=False,
        samesite="Lax",
    )

    response.data = {
        "access_token": access_token,
        "details": "Authentication successful",
    }

    return response
