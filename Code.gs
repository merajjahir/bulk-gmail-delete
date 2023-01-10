function Bulk_gmail_delete_func() {

  let threads = GmailApp.getInboxThreads();
  let number_of_deleted_email = 0;
  let email_sender_name = 'tonebase Team';

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

      const regex = new RegExp(email_sender_name);
      if(regex.test(sender) ==true)
      {
        
        Logger.log( "sending to " + subject +" from " + sender + " to trash");
        threads[i].moveToTrash();
        number_of_deleted_email++;
        // Logger.log("Deleted " + number_of_deleted_email + " Emails from " + email_sender_name);


      }


    }


  }

    Logger.log("Deleted " + number_of_deleted_email + " Emails from " + email_sender_name);

}

