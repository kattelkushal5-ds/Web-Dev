from userconnectio.models import ConnectionRequest



def req_pending(request):
    if (request.user.is_anonymous):
        print("this called")
        return {'pending': 0,'sent':0}
    else:
        print("heree")
        print(request.user)
        pendings_requests = ConnectionRequest.objects.filter(receiver=request.user,is_active=True).count()
        sent_requests = ConnectionRequest.objects.filter(sender=request.user,is_active=True).count()
        return {'pending': pendings_requests,'sent':sent_requests}


