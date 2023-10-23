import React from 'react';
import logo from '../images/logo.svg';
import discord from '../images/discord.svg';

/**
 * Discord - the discord invite.
 * @return {JSX.Element}
 */
const Discord = () => {
  /**
   * discordInvite - open browser tab for invite.
   */
  const discordInvite = () => {
    window.open('https://discord.gg/TqpbYbXJDh', '_blank').focus();
  };

  return (<>
    <div style={{
      cursor: 'pointer', display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      fontSize: '1rem',
      marginBlock: '1em'}}
       onClick={discordInvite}>
      <img src={logo} width={'100px'} height={'100px'}
           alt={'TransMedical United logo'}/>
      <div style={{marginLeft: '10px', color: '#6BA6B2'}}>
        Trans
      </div>
      <div style={{color: '#AEC86E'}}>
        Medical&nbsp;
      </div>
      <div style={{color: '#6BA6B2'}}>
        United
      </div>
      <div style={{display: 'flex', flex: 'none'}}>
      <img src={discord} width={'50px'} height={'50px'}
           alt={'Discord Invite'} style={{marginLeft: '10px'}}/>
      <p style={{marginLeft: '10px'}}>invite.</p>
      </div>
    </div>
  </>);
};

export default Discord;