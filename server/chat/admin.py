from django.contrib import admin

from . import models


@admin.register(models.Message)
class MessageAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Channel)
class ChannelAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Interest)
class InterestAdmin(admin.ModelAdmin):
    pass
