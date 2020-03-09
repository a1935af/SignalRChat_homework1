using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace SignalRChat.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage( string id)
        {
            await Clients.All.SendAsync("ReceiveMessage", id);
        }
    }
}