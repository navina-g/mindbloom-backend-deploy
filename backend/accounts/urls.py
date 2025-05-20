from django.urls import path
# from .views import register_user, login_user, LogoutView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import register_user, login_user, LogoutView, MoodEntryListCreateView
from .views import AppointmentListCreateView

urlpatterns = [
    path('signup/', register_user, name='signup'),
    path('login/', login_user, name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('moods/', MoodEntryListCreateView.as_view(), name='mood-list-create'),
    path('appointments/', AppointmentListCreateView.as_view(), name='appointments'),
]



# from django.urls import path, include
# from .views import register_user, login_user, LogoutView
# from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
# from django.contrib import admin


# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('signup/', register_user, name='signup'),
#     # path('accounts/signup/', signup_view, name='signup'),
#     path('login/', login_user, name='login'),
#     path('logout/', LogoutView.as_view(), name='logout'),
#     # path('api/', include('yourapp.urls')),
#     path('api/accounts/', include('accounts.urls')),
#     path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
#     path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

# ]
