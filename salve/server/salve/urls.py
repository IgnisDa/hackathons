from django.contrib import admin
from django.urls import include, path

from salve.api import graphql_config

urlpatterns = [
    path("admin/", admin.site.urls),
    path("chat/", include("chat.urls")),
    path(
        "graphql/",
        graphql_config.SalveGraphQLView.as_view(schema=graphql_config.schema),
        name="graphql",
    ),
]
