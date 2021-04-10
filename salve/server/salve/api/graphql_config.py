
import glob

import ariadne
from ariadne.contrib.django.scalars import date_scalar, datetime_scalar
from ariadne.contrib.django.views import GraphQLView
from django.conf import settings


class SalveGraphQLView(GraphQLView):
    pass


type_defs = [
    ariadne.load_schema_from_path(f)
    for f in glob.glob(str(settings.BASE_DIR / "*" / "api" / "schema" / "*.graphql"))
]

resolvers = [
    date_scalar,
    datetime_scalar,
]

schema = ariadne.make_executable_schema(
    type_defs,
    resolvers,
    ariadne.snake_case_fallback_resolvers,
)
