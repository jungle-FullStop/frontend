import { useState } from 'react';

const Header = () => {
  return (
    <div className="w-full p-2 sm:w-[80%] sm:p-0">
      <div className="flex items-center justify-start ">
        <input
          type="text"
          placeholder="제목을 입력하세요"
          className="border-brown mr-10 h-12 w-3/5 rounded-xl border pl-4 outline-none sm:mb-5"
          onChange={changeTitle}
          value={title}
        />
        <div className="flex items-center justify-center sm:mb-5">
          <label className="text-md mr-3 cursor-pointer font-bold sm:text-lg " htmlFor="status">
            {status}
          </label>
          <input
            checked={status === '나만 보기' ? false : true}
            type="checkbox"
            id="status"
            className={`h-8 w-8  cursor-pointer appearance-none bg-[url("./assets/image/lock.svg")] bg-no-repeat checked:bg-[url("./assets/image/unlocked.svg")]`}
            onChange={toggleStatus}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
