import axios from "axios";

const deleteBtn = document.querySelectorAll("#jsDeleteComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");

const decreaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
};

const deleteComment = target => {
  commentList.removeChild(target);
  decreaseNumber();
};

const sendComment = async (comment, target) => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment/delete`,
    method: "POST",
    data: {
      comment
    }
  });
  if (response.status === 200) deleteComment(target);
};

const handleClick = event => {
  event.preventDefault();
  const comment = event.target.parentNode.previousSibling.innerText;
  const target = event.target.parentNode.parentNode;
  sendComment(comment, target);
};

const init = () => {
  deleteBtn.forEach(btn => {
    btn.addEventListener("click", handleClick);
  });
};

if (deleteBtn) {
  init();
}
