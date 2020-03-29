import React, { ReactElement } from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../store';
import { ThemeOptions } from '../../store/userOptions/types';

interface IAnnouncement {
  id: string;
  timestamp: Date;
  link: string;
  text: string;
}

interface IOwnProps {
  announcements: IAnnouncement[];
}

interface IStateProps {
  theme: ThemeOptions;
}

type Props = IOwnProps & IStateProps;

const Announcements = (props: Props): ReactElement => {
  const { theme, announcements } = props;

  return (
    <div className="wrapper">
      <div className="announcements_header">
        LATEST ANNOUNCEMENTS
      </div>
      <div className="announcements">
        {announcements.map(({id, text, timestamp}) => {
          return <div key={id} className="announcement">{`${timestamp.getUTCMonth() + 1}/${timestamp.getUTCDate()} ${text}`}</div>
        })}
      </div>
      <div className="announcements_bottom_padding" />
      <style jsx>
        {`
          .wrapper {
            height: 100%;
            display: flex;
            flex-direction: column;
          }
                  
          .announcements_header {
            font-family: Montserrat-Bold;
            text-align: center;
            color: ${theme.colors.ANNOUNCE_GOLD_TEXT};
            padding: 0.93em 0.78em;
            background: ${theme.colors.ANNOUNCE_GOLD_BACKGROUND};
          }

          .announcements {
            font-family: Montserrat-Regular;
            color: ${theme.colors.ANNOUNCE_GOLD_BACKGROUND};
            background: ${theme.colors.ALT_LIGHT};
            padding: 0.7em;
          }

          .announcements_bottom_padding {
            height: 10px;
            width: 100%;
          }

          .announcement {
            padding: 0.5em;
          }
        `}
      </style>
    </div>
  );
}

const mapStateToProps = (state: RootState): IStateProps => ({
  theme: state.userOptions.theme,
});


export default connect(
  mapStateToProps,
  null,
)(Announcements as (props: IOwnProps) => ReactElement);
