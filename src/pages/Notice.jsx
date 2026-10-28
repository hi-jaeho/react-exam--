import { useEffect, useState } from "react";
import axios from "axios";

const Notice = () => {
  const [data, setData] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const filteredNotices = data.filter((notice) =>
    notice.title.toLowerCase().includes(searchKeyword.toLowerCase()),
  );

  return (
    <div>
        <h2>공지 사항</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="상품명으로 검색"
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <p>{data.length}건</p>
      </div>
        {(filteredNotices === null) ? (<div>
        <ul className="notice-list">
          {data.map((notice) => (
            <div>
              <p className="notice-id">
                <li className="notice-id" key={notice.id}>
                  {notice.id}. {notice.title}
                </li>
              </p>
            </div>
          ))}
        </ul>
      </div>) : (filteredNotices.map(notice => (
        <div>
            <ul>
                <p className="notice-id">
                    <li className="notice-id" key={notice.id}>
                    {notice.id}. {notice.title}
                    </li>
                </p>
            </ul>
        </div>
        )))}
    </div>
  );
};

export default Notice;
