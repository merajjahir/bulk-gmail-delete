function Bulk_gmail_delete_func() {

    let threads = GmailApp.getInboxThreads();
  
    for (let i = 0; i < threads.length; i++) {
  
      let label = threads[i].getLabels();
  
      // Logger.log(Object.keys(threads[i].getMessageCount()));
      let messageCount = threads[i].getMessageCount();
      if(messageCount == 1)
      {
        // threads[i][0] 
        let single_messages = threads[i].getMessages()[0];
  
        let sender = single_messages.getFrom(); 
        let subject = single_messages.getSubject(); 
  
        // regex checks all the emails where the sender is Reddit and deletes them .
        const regex = new RegExp('Reddit');
  
        if(regex.test(sender) ==true)
        {
          
            // before deleting logs the subject of the email and the sender name
            Logger.log( "sending to " + subject +" from " + sender + " to trash");
            threads[i].moveToTrash();
  
        }
  
      }
  
  
    }
  
  
  
  }
  