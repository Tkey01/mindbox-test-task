import React, { useState, useCallback } from "react";

import "./style.css";

type Invite = {
  id: number;
  name: string;
};

export const Invites = () => {
  const [name, setName] = useState<string>("");
  const [invites, setInvites] = useState<Invite[]>([]);

  const handleChangeName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    },
    [setName]
  );

  const handleSubmit = useCallback(() => {
    setInvites((prevState) => [...prevState, { id: Date.now(), name }]);
    setName("");
  }, [name, setInvites, setName]);

  const handleKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        handleSubmit();
      }
    },
    [handleSubmit]
  );

  return (
    <div className="invites">
      <div className="invites--form">
        <input
          className="invites--form-input"
          onChange={handleChangeName}
          onKeyPress={handleKeyPress}
          type="text"
          value={name}
        />
        <button className="invites--form-submit" onClick={handleSubmit}>
          Invite
        </button>
      </div>
      <div className="invites--delimiter" />
      <ul className="invites--items">
        {invites.map(({ id, name }) => (
          <li key={id} className="invites--item">
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};
