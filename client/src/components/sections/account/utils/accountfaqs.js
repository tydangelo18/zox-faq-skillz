export const accountData = [
  {
    question: "Why did I stop receiving ZOX emails?",
    answer: (
      <p>
        That’s not good! Typically, we’ve found that this issue is caused by
        emails going to your spam folder. If that’s not the case, your email may
        have bounced from your email provider. This usually happens when your
        inbox is full, your email provider was down, or the message was too
        large for your inbox.
        <br />
        <br />
        If you need to resubscribe to emails, you can do so at this{" "}
        <a
          className="bolded"
          href="https://zox.la/pages/resubscribe"
          target="null"
        >
          here.
        </a>
      </p>
    ),
  },
  {
    question: "Why can't I log in?",
    answer: (
      <p>
        If you have lost or forgotten your password, don't worry, it's very easy
        to fix. All you will need to do is go{" "}
        <a className="bolded" href="https://zox.la/account/login" target="null">
          here
        </a>{" "}
        and click the 'Forgot Password' link. That should bring you to a page to
        enter your email and a message will be sent over to set a new password.
        <br />
        <br />
        If you have tried the above step and had an error saying you do not have
        an account. That would mean that you did not create an account prior to
        ordering or after you ordered. That is very easy to fix as well, to
        create an account with any previous order history you will need to click{" "}
        <a
          className="bolded"
          href="https://zox.la/account/register"
          target="null"
        >
          here.
        </a>
        <br />
        <br />
        <i>
          Make certain you use the same email address that you initially used
          for your order and it should sync correctly for you and have your
          points automatically added in.
        </i>
      </p>
    ),
  },
  {
    question: "How do I change my billing information?",
    answer: (
      <p>
        This is done during check out, if you need to update your payment
        information/method. Please be sure to change it during checkout and save
        it for the future as this should help you check out faster.
        <br />
        <br />
        <b>
          This will not update your subscription information and will need to be
          done so under 'Manage Subscriptions'.
        </b>
      </p>
    ),
  },
  {
    question: "How do I update my default address?",
    answer: (
      <p>
        This is a very simple process to do. You will need log into your
        account, click 'My Account', click 'View Addresses', then 'Add a New
        Address.' When you fill it out make sure to click the box to set it as
        your new default.
        <br />
        <br />
        <b>
          This will not update any active subscription addresses and you will
          need to do that under 'Manage Subscriptions'.
        </b>
      </p>
    ),
  },
  {
    question: "I filled out the contact form, how soon will you respond?",
    answer: (
      <p>
        This all depends on how busy we are. It typically takes up to 24 hours
        for us to respond to everyone depending on our workload. We typically
        respond to emails Monday-Friday, so if you email in on Friday night, the
        soonest you'll receive a response is Monday.
        <br />
        <br />
        Also, it's important to keep in mind that our system is set to show
        oldest tickets first. If you email in while waiting to follow up, your
        ticket will be marked as brand new and won't show as close to the top as
        it would have.
      </p>
    ),
  },
];
