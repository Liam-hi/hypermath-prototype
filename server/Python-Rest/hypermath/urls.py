from django.urls import path
from . import views

urlpatterns = [
    path('add/<int:number>/', views.add_number, name='add_number'),
    path('hakimi_sequence/<str:sequence>/', views.hakimi_sequence, name='hakimi_sequence'),
]
