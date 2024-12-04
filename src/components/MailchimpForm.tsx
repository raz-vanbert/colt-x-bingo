// components/MailchimpForm.tsx
import React, { useEffect, useRef } from "react";
import "./MailchimpForm.css";

const MailchimpForm: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    script.async = true;
    script.defer = true;
    if (formRef.current) {
      formRef.current.appendChild(script);
    }
  }, []);

  return (
    <div ref={formRef}>
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <!-- Begin Mailchimp Signup Form -->
            <div id="mc_embed_shell">
                <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
                <div id="mc_embed_signup">
                    <form action="https://gmail.us3.list-manage.com/subscribe/post?u=d333638e6749f93f1559118fc&amp;id=8df6b14b8d&amp;f_id=00c6dce3f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                        <div id="mc_embed_signup_scroll">
                            <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                            <div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></div><div class="mc-field-group"><label for="mce-FNAME">First Name </label><input type="text" name="FNAME" class=" text" id="mce-FNAME" value=""></div>
                        <div id="mce-responses" class="clear foot">
                            <div class="response" id="mce-error-response" style="display: none;"></div>
                            <div class="response" id="mce-success-response" style="display: none;"></div>
                        </div>
                    <div aria-hidden="true" style="position: absolute; left: -5000px;">
                        /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
                        <input type="text" name="b_d333638e6749f93f1559118fc_8df6b14b8d" tabindex="-1" value="">
                    </div>
                        <div class="optionalParent">
                            <div class="clear foot">
                                <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Join">
                                <p style="margin: 0px auto;"><a href="http://eepurl.com/i5x8-w" title="Mailchimp - email marketing made easy and fun"><span style="display: inline-block; background-color: transparent; border-radius: 4px;"><img class="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style="width: 220px; height: 40px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;"></span></a></p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
          <!--End mc_embed_signup-->
        `,
        }}
      />
    </div>
  );
};

export default MailchimpForm;
