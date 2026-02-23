from django.urls import include, path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)
from apps.utils.cookies import CookieTokenRefreshView

urlpatterns = [
    path("silk/", include("silk.urls", namespace="silk")),
    path("users/", include("apps.profiles.urls")),
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", CookieTokenRefreshView.as_view(), name="token_refresh"),
]
