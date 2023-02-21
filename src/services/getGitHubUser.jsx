import React from "react";

export const getGitHubUser = async (userName) => {

  try {
    const response = await fetch(`https://api.github.com/users/${userName}`);

    return await response.json();
  } catch (error) {

  }
}