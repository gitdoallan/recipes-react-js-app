import React from 'react';

export default function InputLogin() {
  return (
    <div>
      <form>
        <label htmlFor="email">
          <input
            type="email"
            placeholder="Email"
            id="email"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            placeholder="Password"
            id="password"
            data-testid="password-input"
          />
        </label>
        <button data-testid="login-submit-btn" type="button">Enter</button>
      </form>
    </div>
  );
}
