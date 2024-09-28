import { useState } from 'react';
import { getUserCount } from '../app/utils';

const UserCountButton = () => {
  
  const [userCount, setUserCount] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetUserCount = async () => {
    setIsLoading(true);
    try {
      const count = await getUserCount();
      setUserCount(count);
    } catch (error) {
      console.error("Error fetching user count:", error);
      setUserCount("Error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center px-8 rounded-md justify-center max-w-md mx-auto pt-2 mt-8 border-black">
      <button
        onClick={handleGetUserCount}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Get User Count'}
      </button>
      {userCount !== null && (
        <p className="mt-4 text-lg font-semibold text-black">User Count: {userCount}</p>
      )}
    </div>
  );
};

export default UserCountButton;
