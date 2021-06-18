// @ts-nocheck
import React from 'react';
import moment from 'moment';

function banText(props) {
  let data = props.data;

  return {
    title: `${data.modWhoBanned.username} has banned ${data.bannedPlayer.username} for reason ${data.reason}.`,
    body: (
      <span>
        <p>The duration specified was: {data.durationToBan}.</p>
        {/* <p>The ban will be released on: {whenRelease.format("LLL")}.</p> */}
        <p>Moderator message: '{data.descriptionByMod}'.</p>
        <p>User ban: {data.userBan ? 'true' : 'false'}</p>
        <p>IP ban: {data.ipBan ? 'true' : 'false'}</p>
        <p>
          Single IP ban: {data.singleIPBan ? 'true' : 'false'} (Note: Don't
          worry if IP Ban is true too, it's just for the server to know that it
          still is technically an "IP ban")
        </p>
      </span>
    ),
  };
}

function munbanText(props) {
  let data = props.data;
  let whenMade = moment(data.whenMade);
  let whenRelease = moment(data.whenRelease);

  return {
    title: `${props.modWhoMade.username} has UNBANNED ${data.bannedPlayer.username}.`,
    body: (
      <span>
        <p>The original ban was made by: {data.modWhoBanned.username}.</p>
        <p>The date the ban was made on was: {whenMade.format('LLL')}.</p>
        <p>The duration specified was: {data.durationToBan}.</p>
        <p>The ban will be released on: {whenRelease.format('LLL')}.</p>
        <p>Moderator message: '{data.descriptionByMod}'.</p>
        <p>User ban: {data.userBan ? 'true' : 'false'}</p>
        <p>IP ban: {data.ipBan ? 'true' : 'false'}</p>
        <p>
          Single IP ban: {data.singleIPBan ? 'true' : 'false'} (Note: Don't
          worry if IP Ban is true too, it's just for the server to know that it
          still is technically an "IP ban")
        </p>
      </span>
    ),
  };
}

function avatarText(props) {
  let data = props.data;
  return {
    title: `${props.modWhoMade.username} has ${
      data.approved === 'true' ? 'APPROVED' : 'REJECTED'
    } ${data.username}'s avatar.`,
    body: (
      <span>
        <p>Message to mod: {data.msgToMod}.</p>
        <p>Mod comment: {data.modComment}.</p>

        <div className="row">
          <div className="col-sm-6">
            <div className="panel panel-success">
              <div className="panel-heading">Res img:</div>
              <div className="panel-body alignCenterHoriz">
                <img className="avatarImg" src={data.resLink}></img>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="panel panel-danger">
              <div className="panel-heading">Spy img:</div>
              <div className="panel-body alignCenterHoriz">
                <img className="avatarImg" src={data.spyLink}></img>
              </div>
            </div>
          </div>
        </div>
      </span>
    ),
  };
}

function ipLinkedAccsText(props) {
  let data = props.data;

  var treeLines = data.newUsernamesTreeLines.map((x, i) => (
    <p
      key={i}
      dangerouslySetInnerHTML={{ __html: x }}
      style={{
        margin: 0,
      }}
    ></p>
  ));

  return {
    title: `${props.modWhoMade.username} has used /miplinkedaccs on ${props.data.target}.`,
    body: (
      <div>
        <p>Full tree requested: {data.fullTree ? 'True' : 'False'}</p>
        <p>The usernames that were linked were:</p>
        {treeLines}
      </div>
    ),
  };
}

function forumBanText(props) {
  let data = props.data;
  let link = 'forum/show';
  if (data.idOfForum !== undefined) {
    link += '/' + data.idOfForum.toString();
  }

  if (data.idOfReply !== undefined) {
    link += '#' + data.idOfReply.toString();
  } else if (data.idOfComment !== undefined) {
    link += '#' + data.idOfComment.toString();
  }

  return {
    title: `${props.modWhoMade.username} has removed a ${props.data.elementDeleted} by ${props.data.bannedPlayer.username}.`,
    body: (
      <span>
        <p>Moderator message: '{data.descriptionByMod}'.</p>
        <p>The content was: {data.originalContent}</p>
        <p>The reason was: {data.reason}</p>
        <p>
          The link is: <a href={link}>Here</a>
        </p>
      </span>
    ),
  };
}

function mwhisperText(props) {
  let data = props.data;

  let contents = data.log.map((x, i) => {
    return (
      <p
        key={i}
        style={{
          margin: 0,
        }}
      >
        {x.message}
      </p>
    );
  });

  return {
    title: `${props.modWhoMade.username} has used mwhisper on ${data.targetUser.username}.`,
    body: <span>{contents}</span>,
  };
}

function mnotifyText(props) {
  let data = props.data;

  return {
    title: `${props.modWhoMade.username} has created a notification for ${data.targetUser.username}.`,
    body: (
      <span>
        <p>The message left was: '{data.message}'.</p>
      </span>
    ),
  };
}

function pmmodText(props) {
  let data = props.data;
  return {
    title: `${data.targetUser.username} has used pmmod on ${props.modWhoMade.username}.`,
    body: (
      <span>
        <p>{data.message}</p>
      </span>
    ),
  };
}

class Log extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props.log);
    var logText = {
      title: 'Error',
      body: 'Error',
    };

    switch (this.props.log.type) {
      case 'ban':
        logText = banText(this.props.log);
        break;
      case 'munban':
        logText = munbanText(this.props.log);
        break;
      case 'avatar':
        logText = avatarText(this.props.log);
        break;
      case 'miplinkedaccs':
        logText = ipLinkedAccsText(this.props.log);
        break;
      case 'forumBan':
        logText = forumBanText(this.props.log);
        break;
      case 'mwhisper':
        logText = mwhisperText(this.props.log);
        break;
      case 'mnotify':
        logText = mnotifyText(this.props.log);
        break;
      case 'pmmod':
        logText = pmmodText(this.props.log);
        break;
    }

    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">{logText.title}</h3>
        </div>
        <div className="panel-body">
          <p>Date: {moment(this.props.log.dateCreated).format('LLL')}</p>
          <hr></hr>
          <ExpandableComponent data={logText.body} />
        </div>
      </div>
    );
  }
}

class ExpandableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  toggleExpand() {
    this.setState({
      ...this.state,
      expanded: !this.state.expanded,
    });
  }

  render() {
    console.log(this.props.data);
    return (
      <div>
        <div className={this.state.expanded ? '' : 'collapsed'}>
          {this.props.data}
        </div>
        <button
          className={'expandButton'}
          onClick={this.toggleExpand.bind(this)}
        >
          {this.state.expanded ? 'Collapse' : 'Expand'}
        </button>
      </div>
    );
  }
}

export default class ModLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: null,
      logPage: 0,
    };
  }

  componentDidMount() {
    this.loadLogs();
  }

  loadMoreLogs() {
    this.loadLogs(1);
  }

  loadLessLogs() {
    this.loadLogs(-1);
  }

  loadLogs(numIncrement) {
    let page = 0;

    if (numIncrement !== undefined) {
      if (this.state.logPage + numIncrement >= 0) {
        page = this.state.logPage + numIncrement;
        this.setState({ logPage: page });
      }
    }

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', '/mod/ajax/logData/' + page, true);

    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var logs = JSON.parse(xmlhttp.responseText);
        this.setState({ logs: logs });
        // console.log(logs);
      }
    };
    xmlhttp.send();
  }

  render() {
    if (!this.state.logs) {
      return 'Loading.....';
    } else {
      const allLogs = this.state.logs.map((log, i) => {
        return <Log log={this.state.logs[i]} key={this.state.logs[i]._id} />;
      });

      return (
        <span>
          <span className="pageButtonGroup">
            <button
              className="btn btn-info logButtons"
              onClick={() => this.loadLessLogs()}
            >
              Prev page
            </button>
            <span>Page: {this.state.logPage + 1}</span>
            <button
              className="btn btn-info logButtons"
              onClick={() => this.loadMoreLogs()}
            >
              Next page
            </button>
          </span>
          {allLogs}
        </span>
      );
    }
  }
}

if (module.hot) module.hot.accept();
// if (module.hot) {
// module.hot.accept('./index.tsx', function () {
//   console.log('Accepting the updated printMe module!');
// });
// }
