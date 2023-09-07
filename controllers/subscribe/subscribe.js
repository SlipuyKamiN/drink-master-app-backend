import { HttpError, ctrlWrapper } from "../../utils/index.js";
import { sendEmail } from "../../helpers/index.js";
import User from "../../models/users.js";

const subscribe = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw HttpError(404, "User not found");
    }

    await User.findByIdAndUpdate(
      user._id,
      {
        subscription: true,
      },
      {
        new: true,
      }
    );
  } catch (error) {
    throw error;
  }

  const subscribeEmail = {
    to: email,
    subject: "DrinkMaster Subscription",
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office"
      lang="en"
    >
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
        <title>Drink Master Email</title>
    
        <style>
          @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Manrope:wght@400;600&family=Open+Sans:wght@600;700;800&display=swap");
          table {
            border-spacing: 0;
            mso-cellspacing: 0;
          mso-padding-alt: 0;
          }
    /* 
          td {
            padding: 0;
          } */
    
          #outlook a {
            padding: 0;
          }
    
    
          /* @media screen and (max-width: 399.98px) {
          p{
            font-size: 14px;
          }
          } */
        </style>
        <!--[if (gte mso 9)|(IE)]>
          <style type="text/css">
            table {
              border-collapse: collapse !important;
            }
          </style>
        <![endif]-->
    
        <!--[if (gte mso 9)|(IE)]>
          <xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG />
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
        <![endif]-->
      </head>
      <body
        style="margin: 0; padding: 0; min-width: 100%; background-color: #dde0e1"
      >
        <!--[if (gte mso 9)|(IE)]>
          <style type="text/css">
            body {
              background-color: #dde0e1 !important;
            }
            body,
            table,
            td,
            p,
            a {
              font-family: sans-serif, Arial, Helvetica !important;
            }
          </style>
        <![endif]-->
        <center
          style="
            width: 100%;
            table-layout: fixed;
            background-color: #dde0e1;
            padding-top: 10px;
            padding-bottom: 10px;
          "
        >
          <div style="max-width: 600px; background-color: #0a0a11">
            <table
              align="center"
              border="0"
              cellspacing="0"
              cellpadding="0"
              role="presentation"
              style="
                color: #f3f3f3;
                font-family: 'Manrope', sans-serif, Arial, Helvetica;
                background-color: #0a0a11;
                margin: 0;
                padding: 0;
                width: 100%;
                max-width: 600px;
              "
            >
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    role="presentation"
                  >
                    <tr>
                      <td style="padding: 20px 0 20px 0; text-align: center">
                        <a
                          href="https://slipuykamin.github.io/drink-master-app-frontend"
                          target="_blank"
                        >
                          <img
                            src="https://res.cloudinary.com/dbvxfxxjv/image/upload/v1693652289/email_subscribe/Screenshot_1_oqq89j.png"
                            alt="Drink Master Logo"
                            border="0"
                            width="160"
                          />
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
    
              <tr>
                <td style="padding: 0 24px 25px 24px">
                  <table
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    role="presentation"
                    style="width: 100%; max-width: 600px"
                  >
                    <tr>
                      <td>
                        <div
                          style="
                            height: 1px;
                            width: 100%;
                            max-width: 600px;
                            background-color: #f3f3f3;
                          "
                        ></div>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 20px 0 0 0">
                        <p
                          style="
                            font-size: 14px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 24px;
                          "
                        >
                          &#9825; Thank you for subscription!&#9825;
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p
                          style="
                            font-size: 14px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 24px;
                          "
                        >
                          Wait for our monthly newsletter with new exciting drinks!
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 20px 0 25px 0">
                        <img
                          src="https://res.cloudinary.com/dbvxfxxjv/image/upload/v1693652351/email_subscribe/Screenshot_6_weq9zv.png"
                          alt="Cocktails"
                          border="0"
                          style="
                            width: 100%;
                            max-width: 600px;
                            filter: opacity(50%);
                          "
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p
                          style="
                            font-size: 14px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 24px;
                          "
                        >
                          Drink Master app offers more than just a collection of
                          recipes - it is designed to be your very own digital
                          cookbook.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 0px 24px 25px 24px">
                  <table
                    align="center"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    role="presentation"
                    style="width: 100%"
                  >
                    <tr>
                      <td style="padding: 0 0 25px 0">
                        <div
                          style="
                            height: 1px;
                            width: 100%;
                            background-color: #f3f3f3;
                          "
                        ></div>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 0 0 15px 0; text-align: center">
                        <p
                          style="
                            margin: 0;
                            font-weight: 400;
                            font-size: 12px;
                            line-height: 20px;
                            text-align: center;
                            color: #f3f3f3;
                          "
                        >
                          © Drink Master. All rights reserved.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="center"
                        style="padding: 0 24px 0 24px; font-size: 0"
                        class="fourth-columns mobile-padding"
                      >
                        <!--[if (gte mso 9)|(IE)]>
                        <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                        <tr>
                        <td>
                      <![endif]-->
                        <table
                          border="0"
                          cellspacing="0"
                          cellpadding="0"
                          role="presentation"
                          style="
                            vertical-align: middle;
                            width: 100%;
                            max-width: 26px;
                            display: inline-block;
                          "
                          class="column"
                        >
                          <tr>
                            <td style="padding: 4px 4px 4px 4px">
                              <table
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                              >
                                <tr>
                                  <td>
                                    <a
                                      href="https://facebook.com"
                                      target="_blank"
                                    >
                                      <img
                                        src="https://res.cloudinary.com/dbvxfxxjv/image/upload/v1693652308/email_subscribe/Screenshot_4_x35tvh.png"
                                        alt="Facebook"
                                        border="0"
                                        width="18"
                                        style="max-width: 18px"
                                      />
                                    </a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if (gte mso 9)|(IE)]>
                        </td>
                        <td>
                      <![endif]-->
                        <table
                          border="0"
                          cellspacing="0"
                          cellpadding="0"
                          role="presentation"
                          style="
                            vertical-align: middle;
                            width: 100%;
                            max-width: 26px;
                            display: inline-block;
                          "
                          class="column"
                        >
                          <tr>
                            <td style="padding: 4px 4px 4px 4px">
                              <table
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                              >
                                <tr>
                                  <td>
                                    <a
                                      href="https://www.instagram.com"
                                      target="_blank"
                                    >
                                      <img
                                        src="https://res.cloudinary.com/dbvxfxxjv/image/upload/v1693652336/email_subscribe/Screenshot_2_ugnhbf.png"
                                        alt="Instagram"
                                        border="0"
                                        width="18"
                                        style="max-width: 18px"
                                      />
                                    </a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if (gte mso 9)|(IE)]>
                        </td>
                        <td>
                      <![endif]-->
                        <table
                          border="0"
                          cellspacing="0"
                          cellpadding="0"
                          role="presentation"
                          style="
                            vertical-align: middle;
                            width: 100%;
                            max-width: 26px;
                            display: inline-block;
                          "
                          class="column"
                        >
                          <tr>
                            <td style="padding: 4px 4px 4px 4px">
                              <table
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                              >
                                <tr>
                                  <td>
                                    <a
                                      href="https://youtube.com"
                                      target="_blank"
                                    >
                                      <img
                                        src="https://res.cloudinary.com/dbvxfxxjv/image/upload/v1693652325/email_subscribe/Screenshot_3_dhg4wj.png"
                                        alt="YouTube"
                                        border="0"
                                        width="18"
                                        style="max-width: 18px"
                                      />
                                    </a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if (gte mso 9)|(IE)]>
                        </td>
                        <td>
                      <![endif]-->
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 15px 0 15px 0; text-align: center">
                        <p
                        style="
                          margin: 0;
                          font-weight: 400;
                          font-size: 12px;
                          line-height: 20px;
                          text-align: center;
                          color: #f3f3f3;
                        "
                      >
                        Created by <a style="color: #f3f3f3; text-decoration: none;" href="https://github.com/SlipuyKamiN/drink-master-app-frontend">"Клуб анонімних розробників"</a>
                      </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
          <![endif]-->
          </div>
        </center>
      </body>
    </html>
`,
  };

  await sendEmail(subscribeEmail);

  res.json({
    message: "Successful subscription",
  });
};

export default ctrlWrapper(subscribe);
