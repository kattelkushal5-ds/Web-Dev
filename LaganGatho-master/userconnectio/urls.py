
from django.urls import path
from . import views

app_name = 'user_connection'
urlpatterns = [
     path('sendrequest/<int:id>/',views.send_request,name="send-request"),
     path('cancelrequest/<int:id>/',views.cancel_request,name="cancel-request"),
     path('acceptrequest/<int:id>/',views.accept_request,name="accept-request"),
     path('declinerequest/<int:id>/',views.decline_request,name="decline-request"),
     path('disconnectuser/<int:id>/',views.disconnect_user,name="disconnect-user"),
     path('myconnections/',views.ConnectionListView.as_view(),name="connection-list"),
     path('pendingrequests/',views.RequestPendingListView.as_view(),name="request-list"),
     path('requestssent/',views.RequestSentListView.as_view(),name="sent-list"),
]
