import React from 'react';

const SelectedUserList = (props) => {
  const { users = [] } = props;
  const filteredUsers = users.filter((u) => u.isSelected);
  return (
    <div>
      {filteredUsers.map((user) => (
        <span>
          {user.firstname} {user.lastname}
        </span>
      ))}
    </div>
  );
};

export default SelectedUserList;
