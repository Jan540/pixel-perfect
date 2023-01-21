using ipt_project_cepbep.GraphQL.Canvas;
using ipt_project_cepbep.Models;

namespace ipt_project_cepbep.GraphQL.UserCepbep;

[ExtendObjectType(Name = "Subscription")]
public class UserSubscription
{
    [Subscribe]
    public FriendRequestPayload? OnAddFriend([EventMessage] FriendRequestPayload payload, string userId)
    {
        if (payload.ToFriedUserId == userId)
        {
            return payload;
        }
        return null;
    }
}