import React from 'react';
import dany from '../../images/profiles/daryl.png'
import kim from '../../images/profiles/kim.jpeg'
import ben from '../../images/profiles/ben.png'
import douglus from '../../images/profiles/douglas.png'
import jacob from '../../images/profiles/jacob.png'
import john from '../../images/profiles/john.jpeg'
import sarah from '../../images/profiles/sarah.jpeg'
import stacey from '../../images/profiles/stacey.jpeg'
import stan from '../../images/profiles/stan.jpeg'

import './Conversation-List.css';

function ConversationList() {
    return (
        <div id="conversation-list">
            <div className="conversation active">
                <img src={dany} alt="Daryl Duckmanton" />
                <div className="title-text">Daryl Duckmanton</div>
                <div className="created-date">Apr 16</div>
                <div className="conversation-message">
                    This is a message
                </div>
            </div>
            <div className="conversation">
                <img src={kim} alt="Kim O'Neil" />
                <div className="title-text">Kim O'Neil</div>
                <div className="created-date">2 days ago</div>
                <div className="conversation-message">
                    Very funny
                </div>
            </div>
            <div className="conversation">
                <img src={john} alt="John Anderson" />
                <div className="title-text">John Anderson</div>
                <div className="created-date">1 week ago</div>
                <div className="conversation-message">
                    Yes I love how Python does that
                </div>
            </div>
            <div className="conversation">
                <img src={ben} alt="Ben Smith" />
                <div className="title-text">Ben Smith</div>
                <div className="created-date">2:49 PM</div>
                <div className="conversation-message">
                    Yeah Miami Heat are done
                </div>
            </div>
            <div className="conversation">
                <img src={douglus} alt="Douglas Johannasen" />
                <div className="title-text">Douglas Johannasen</div>
                <div className="created-date">6:14 PM</div>
                <div className="conversation-message">
                    No it does not
                </div>
            </div>
            <div className="conversation">
                <img src={jacob} alt="Jacob Manly" />
                <div className="title-text">Jacob Manly</div>
                <div className="created-date">3 secs ago</div>
                <div className="conversation-message">
                    Just be very careful doing that
                </div>
            </div>
            <div className="conversation">
                <img src={stacey} alt="Stacey Wilson" />
                <div className="title-text">Stacey Wilson</div>
                <div className="created-date">30 mins ago</div>
                <div className="conversation-message">
                    Awesome!!! Congratulations!!!!
                </div>
            </div>
            <div className="conversation">
                <img src={stan} alt="Stan George" />
                <div className="title-text">Stan George</div>
                <div className="created-date">1 week ago</div>
                <div className="conversation-message">
                    Good job
                </div>
            </div>
            <div className="conversation">
                <img src={sarah} alt="Sarah Momes" />
                <div className="title-text">Sarah Momes</div>
                <div className="created-date">1 year ago</div>
                <div className="conversation-message">
                    Thank you. I appreciate that.
                </div>
            </div>
        </div>
    );
}

export default ConversationList;