const nodemailer = require('nodemailer');
const sendMail = (name, email,  subject, message) => {

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "hanumantsingh892000@gmail.com",
            pass: "qhkmccqqfyhlluzn"
        }
    })

    const userMessage = {
        from: "hanumantsingh892000@gmail.com",
        to: email,
        subject: "Thank you for contacting us - Hanumant Technology Pvt. Ltd.",
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title></title>
  </head>
  <body class="body">
    <div dir="ltr" class="es-wrapper-color">
      <table width="100%" cellspacing="0" cellpadding="0" background="https://ftapbdn.stripocdn.email/content/guids/CABINET_63fbbc11db6741389cc3292b09a63e6d/images/7711511856111535.png" class="es-wrapper">
        <tbody>
          <tr>
            <td valign="top" class="esd-email-paddings">
              <table cellpadding="0" cellspacing="0" align="center" class="es-content esd-header-popover">
                <tbody>
                  <tr>
                    <td align="center" class="es-adaptive esd-stripe">
                      <table width="600" cellspacing="0" cellpadding="0" align="center" class="es-content-body">
                        <tbody>
                          <tr>
                            <td align="left" background="https://ftapbdn.stripocdn.email/content/guids/CABINET_63fbbc11db6741389cc3292b09a63e6d/images/7711511856111535.png" class="esd-structure es-p10 esd-checked" style="background-image: url(https://ftapbdn.stripocdn.email/content/guids/CABINET_63fbbc11db6741389cc3292b09a63e6d/images/7711511856111535.png); background-position: left top; background-repeat: repeat">
                              <!--[if mso]><table width="580"><tr><td width="280" valign="top"><![endif]-->
                              <table cellspacing="0" cellpadding="0" align="left" class="es-left">
                                <tbody>
                                  <tr>
                                    <td width="280" align="left" class="esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td align="left" class="es-infoblock esd-block-text">
                                              <p>
                                                Put your preheader text here
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td><td width="20"></td><td width="280" valign="top"><![endif]-->
                              <table cellspacing="0" cellpadding="0" align="right" class="es-right">
                                <tbody>
                                  <tr>
                                    <td width="280" align="left" class="esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td align="right" class="es-infoblock esd-block-text">
                                              <p>
                                                <a href="https://viewstripo.email/" target="_blank" class="view">View online</a>
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td></tr></table><![endif]-->
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellpadding="0" cellspacing="0" align="center" class="es-header">
                <tbody>
                  <tr>
                    <td align="center" class="es-adaptive esd-stripe">
                      <table width="600" cellspacing="0" cellpadding="0" align="center" class="es-header-body">
                        <tbody>
                          <tr>
                            <td esd-general-paddings-checked="true" align="left" class="esd-structure es-p15">
                              <table width="100%" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td width="570" valign="top" align="center" class="esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td align="center" class="esd-block-image es-m-p0l" style="font-size: 0">
                                              <a href="https://viewstripo.email" target="_blank">
                                                <img src="https://www.hanumanttechnology.com/images/hanumant-technology-logo.png" alt="LawServices logo" title="LawServices logo" width="183">
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td align="left" class="esd-structure">
                              <table width="100%" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td width="600" valign="top" align="center" class="esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td class="esd-block-menu">
                                              <table width="100%" cellspacing="0" cellpadding="0" class="es-menu">
                                                <tbody>
                                                  <tr>
                                                    <td width="25.00%" bgcolor="#333333" align="center" class="es-p10t es-p10b es-p5r es-p5l esd-block-menu-item" style="padding-bottom: 12px; padding-top: 12px">
                                                      <div>
                                                        <a target="_blank" href="https://viewstripo.email/" style="color: #ffffff">
                                                          Practice Area
                                                        </a>
                                                      </div>
                                                    </td>
                                                    <td width="25.00%" bgcolor="#333333" align="center" class="es-p10t es-p10b es-p5r es-p5l esd-block-menu-item" style="padding-bottom: 12px; padding-top: 12px">
                                                      <div>
                                                        <a target="_blank" href="https://viewstripo.email/" style="color: #ffffff">
                                                          Our Attorneys
                                                        </a>
                                                      </div>
                                                    </td>
                                                    <td width="25.00%" bgcolor="#333333" align="center" class="es-p10t es-p10b es-p5r es-p5l esd-block-menu-item" style="padding-bottom: 12px; padding-top: 12px">
                                                      <div>
                                                        <a target="_blank" href="https://viewstripo.email/" style="color: #ffffff">
                                                          Case Results
                                                        </a>
                                                      </div>
                                                    </td>
                                                    <td width="25.00%" bgcolor="#24578e" align="center" class="es-p10t es-p10b es-p5r es-p5l esd-block-menu-item" style="padding-bottom: 12px; padding-top: 12px">
                                                      <div>
                                                        <a target="_blank" href="https://viewstripo.email/" style="color: #ffffff">
                                                          Free consult
                                                        </a>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellspacing="0" cellpadding="0" align="center" class="es-content">
                <tbody>
                  <tr>
                    <td align="center" class="esd-stripe">
                      <table width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" class="es-content-body" style="background-color: rgb(255, 255, 255)">
                        <tbody>
                          <tr>
                            <td esd-general-paddings-checked="true" align="left" class="esd-structure es-p20t es-p10b es-p30r es-p30l">
                              <table width="100%" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td width="540" valign="top" align="center" class="esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td align="left" class="esd-block-text es-p15t">
                                              <h3 style="line-height: 120%">
                                                Hi there,
                                              </h3>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="left" class="esd-block-text es-p15t">
                                              <p class="es-m-txt-c" style="line-height: 150%">
                                                Thanks for using our base of lawyers. We seek to make legal help more convenient and available. Take the next step to receive highly qualified help — send a message to one of the lawyers. Below you will find lawyers you viewed yesterday.
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellspacing="0" cellpadding="0" align="center" class="es-content">
                <tbody>
                  <tr>
                    <td align="center" class="esd-stripe">
                      <table width="600" cellspacing="0" cellpadding="0" align="center" class="es-content-body">
                        <tbody>
                          <tr>
                            <td esd-general-paddings-checked="true" align="left" class="esd-structure es-p20t es-p40b es-p30r es-p30l">
                              <!--[if mso]><table width="540" cellpadding="0" cellspacing="0"><tr><td width="187"><![endif]-->
                              <table cellspacing="0" cellpadding="0" align="left" class="es-left">
                                <tbody>
                                  <tr>
                                    <td width="167" align="center" class="es-m-p0r es-m-p20b esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td align="center" class="esd-block-image" style="font-size: 0">
                                              <a target="_blank">
                                                <img src="https://ftapbdn.stripocdn.email/content/guids/CABINET_63fbbc11db6741389cc3292b09a63e6d/images/28111511861448160.jpg" alt="Jessica Kendal" title="Jessica Kendal" width="167" class="adapt-img">
                                              </a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-text es-p10t es-p5b es-p10r es-p10l">
                                              <h3 style="color: rgb(51, 51, 51)">
                                                Jessica Kendal
                                              </h3>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-text es-p10r es-p10l">
                                              <p style="color: rgb(51,51,51); font-size: 16px; font-family: georgia,times,times new roman,serif; font-style: italic; line-height: 150%">
                                                Phoenix, AZ
                                              </p>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-spacer es-p10t es-p10b es-p20r es-p20l" style="font-size: 0">
                                              <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0">
                                                <tbody>
                                                  <tr>
                                                    <td style="border-bottom: 1px solid rgb(51, 51, 51); background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; height: 1px; width: 100%; margin: 0px"></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-image es-p5t es-p5b" style="font-size: 0">
                                              <a target="_blank">
                                                <img src="https://ftapbdn.stripocdn.email/content/guids/CABINET_63fbbc11db6741389cc3292b09a63e6d/images/47591512052181596.png" alt="" width="88" style="width: 88px">
                                              </a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td esdev-links-color="#333333" align="center" class="esd-block-text es-p20b">
                                              <p style="color: rgb(51, 51, 51)">
                                                out of <a target="_blank" href="https://viewstripo.email/" style="color: rgb(51, 51, 51)">5 reviews</a>
                                              </p>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-button">
                                              <span class="es-button-border es-fw">
                                                <a href="https://viewstripo.email/" target="_blank" class="es-button" style="border-left-width: 0px; border-right-width: 0px">
                                                  Send message
                                                </a>
                                              </span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                    <td width="20" class="es-hidden"></td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td><td width="167"><![endif]-->
                              <table cellspacing="0" cellpadding="0" align="left" class="es-left">
                                <tbody>
                                  <tr>
                                    <td width="167" align="center" class="es-m-p0r es-m-p20b esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td align="center" class="esd-block-image" style="font-size: 0">
                                              <a target="_blank">
                                                <img src="https://ftapbdn.stripocdn.email/content/guids/CABINET_63fbbc11db6741389cc3292b09a63e6d/images/6151511861475944.jpg" alt="Jessica Kendal" title="Jessica Kendal" width="167" class="adapt-img" style="width: 166px">
                                              </a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-text es-p10t es-p5b es-p10r es-p10l">
                                              <h3 style="color: #333333">
                                                Thomas Brown<br>
                                              </h3>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-text es-p10r es-p10l">
                                              <p style="color: #333333; font-size: 16px; font-family: georgia,times,times new roman,serif; font-style: italic; line-height: 150%">
                                                Bouse, AZ<br>
                                              </p>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-spacer es-p10t es-p10b es-p20r es-p20l" style="font-size: 0">
                                              <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0">
                                                <tbody>
                                                  <tr>
                                                    <td style="border-bottom: 1px solid rgb(51, 51, 51); background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; height: 1px; width: 100%; margin: 0px"></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-image es-p5t es-p5b" style="font-size: 0">
                                              <a target="_blank">
                                                <img src="https://ftapbdn.stripocdn.email/content/guids/CABINET_63fbbc11db6741389cc3292b09a63e6d/images/92871512052181374.png" alt="" width="88" style="width: 88px">
                                              </a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td esdev-links-color="#333333" align="center" class="esd-block-text es-p20b">
                                              <p style="color: #333333">
                                                out of <a target="_blank" href="https://viewstripo.email/" style="color: #333333">18 reviews</a>
                                              </p>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-button">
                                              <span class="es-button-border es-fw">
                                                <a href="https://viewstripo.email/" target="_blank" class="es-button" style="border-left-width: 0px; border-right-width: 0px">
                                                  Send message
                                                </a>
                                              </span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td><td width="20"></td><td width="166"><![endif]-->
                              <table cellspacing="0" cellpadding="0" align="right" class="es-right">
                                <tbody>
                                  <tr>
                                    <td width="166" align="center" class="es-m-p0r es-m-p20b esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td align="center" class="esd-block-image" style="font-size: 0">
                                              <a target="_blank">
                                                <img src="https://ftapbdn.stripocdn.email/content/guids/CABINET_63fbbc11db6741389cc3292b09a63e6d/images/52291511861460919.jpg" alt="Jessica Kendal" title="Jessica Kendal" width="166" class="adapt-img" style="width: 166px">
                                              </a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-text es-p10t es-p5b es-p10r es-p10l">
                                              <h3 style="color: #333333">
                                                Lucy Kirk<br>
                                              </h3>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-text es-p10r es-p10l">
                                              <p style="color: rgb(51,51,51); font-size: 16px; font-family: georgia,times,times new roman,serif; font-style: italic; line-height: 150%">
                                                Phoenix, AZ
                                              </p>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-spacer es-p10t es-p10b es-p20r es-p20l" style="font-size: 0">
                                              <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0">
                                                <tbody>
                                                  <tr>
                                                    <td style="border-bottom: 1px solid rgb(51, 51, 51); background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; height: 1px; width: 100%; margin: 0px"></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-image es-p5t es-p5b" style="font-size: 0">
                                              <a target="_blank">
                                                <img src="https://ftapbdn.stripocdn.email/content/guids/CABINET_63fbbc11db6741389cc3292b09a63e6d/images/41951512052181247.png" alt="" width="88" style="width: 88px">
                                              </a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td esdev-links-color="#333333" align="center" class="esd-block-text es-p20b">
                                              <p style="color: #333333">
                                                out of <a target="_blank" href="https://viewstripo.email/" style="color: #333333">15 reviews</a>
                                              </p>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-button">
                                              <span class="es-button-border es-fw">
                                                <a href="https://viewstripo.email/" target="_blank" class="es-button" style="border-left-width: 0px; border-right-width: 0px">
                                                  Send message
                                                </a>
                                              </span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td></tr></table><![endif]-->
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellpadding="0" cellspacing="0" align="center" class="es-footer">
                <tbody>
                  <tr>
                    <td align="center" class="esd-stripe">
                      <table width="600" cellspacing="0" cellpadding="0" align="center" class="es-footer-body">
                        <tbody>
                          <tr>
                            <td esd-general-paddings-checked="true" align="left" class="esd-structure es-p20t es-p20b es-p20r es-p20l">
                              <table width="100%" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td width="560" valign="top" align="center" class="esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td align="center" class="esd-block-social es-p10b" style="font-size: 0">
                                              <table cellspacing="0" cellpadding="0" class="es-table-not-adapt es-social">
                                                <tbody>
                                                  <tr>
                                                    <td valign="top" align="center" class="es-p10r">
                                                      <a target="_blank" href="">
                                                        <img title="Facebook" src="https://ftapbdn.stripocdn.email/content/assets/img/social-icons/logo-gray/facebook-logo-gray.png" alt="Fb" width="32" height="32">
                                                      </a>
                                                    </td>
                                                    <td valign="top" align="center" class="es-p10r">
                                                      <a target="_blank" href="">
                                                        <img title="X" src="https://localfiles.stripocdn.email/content/assets/img/social-icons/logo-gray/x-logo-gray.png" alt="X" width="32" height="32">
                                                      </a>
                                                    </td>
                                                    <td valign="top" align="center" class="es-p10r">
                                                      <a target="_blank" href="">
                                                        <img title="Instagram" src="https://ftapbdn.stripocdn.email/content/assets/img/social-icons/logo-gray/instagram-logo-gray.png" alt="Inst" width="32" height="32">
                                                      </a>
                                                    </td>
                                                    <td valign="top" align="center" class="es-p10r">
                                                      <a target="_blank" href="">
                                                        <img title="Youtube" src="https://ftapbdn.stripocdn.email/content/assets/img/social-icons/logo-gray/youtube-logo-gray.png" alt="Yt" width="32" height="32">
                                                      </a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" esd-links-underline="none" class="esd-block-text es-p5t es-p5b">
                                              <p style="line-height: 21px">
                                                <a target="_blank" href="tel:123456789" style="line-height: 21px; text-decoration: none">123456789</a>
                                              </p>
                                              <p style="line-height: 21px">
                                                <a target="_blank" href="mailto:your@mail.com" style="text-decoration: none">your@mail.com</a>
                                              </p>
                                              <p style="line-height: 21px">
                                                LawServices, Inc. 62 Long St. Salt Lake City, UT 12345
                                              </p>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-text es-p5t es-p5b">
                                              <p style="line-height: 21px; font-size: 12px">
                                                You are receiving this email because you have visited our site or asked us about the regular newsletter. Make sure our messages get to your Inbox (and not your bulk or junk folders). Please add <a target="_blank" href="mailto:your@mail.com" style="font-size: 12px; line-height: 21px">your@mail.com</a> to your contacts!
                                              </p>
                                              <p style="line-height: 21px; font-size: 12px">
                                                <a target="_blank" href="" class="unsubscribe">Unsubscribe</a> | <a target="_blank" href="https://viewstripo.email">Update Preferences</a> | <a target="_blank" href="https://viewstripo.email">Customer Support</a>
                                              </p>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-text">
                                              <p>
                                                <span style="font-size: 12px; line-height: 150%">LawServices © All Rights Reserved</span><br>
                                              </p>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-text es-p10t">
                                              <p style="font-size: 16px; line-height: 150%">
                                                Vector graphics designed by <strong><a target="_blank" href="http://www.freepik.com/">Freepik</a></strong>.
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>`
    }

    transporter.sendMail(userMessage, (error, info) => {
        if (error) {
            return console.log("Email not send")
        }
        console.log(`Send email successfully ${info.response}`)
    })
}

module.exports = sendMail;