from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("induct/", views.induct_view, name="induct"),
    path("interests/", views.get_all_interests_view, name="interests"),
    path("<str:room_name>/", views.room, name="room"),
]
