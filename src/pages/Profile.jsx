import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Profile() {
  return (
    <div>
      <Header
        altImg="Profile"
        srcImg="profileIcon"
        testIdImg="profile-top-btn"
        title="Profile"
        searchActive={ false }
      />
      <div>Profile</div>
      <Footer />
    </div>
  );
}
