import { useAccount, useEnsName } from 'wagmi';

import './style.css';

export const App = () => {
  // Get the address of the currently connected user
  let { address } = useAccount();

  // Defaulting to luc.eth for example purposes
  if (!address) address = '0x225f137127d9067788314bc7fcc1f36746a3c3B5';

  // Lookup the primary name of this user
  const { data: name } = useEnsName({
    address,
  });

  return (
    <div>
      <h1>Hello {name}</h1>
      <p>We hope you have an amazing day!</p>
    </div>
  );
};
