import "./styles/main.scss";

$(document).ready(function () {
  $(document).on("click", ".todo-item", function () {
    const title = $(this).data("text");
    const details = $(this).data("details") || "Немає деталей";

    $("#modal-text").html(`
      <h5>${title}</h5>
      <hr>
      <p>${details.replace(/\n/g, "<br>")}</p>
    `);

    $("#todoModal").modal("show");
  });

  $(document).on("click", ".delete-btn", function (e) {
    e.stopPropagation();
    $(this).parent().remove();
  });

  $("#addTask").click(function () {
    const taskText = $("#newTask").val().trim();
    if (taskText) {
      const taskDetails = prompt("Введіть деталі завдання:", "");

      const newItem = $(`
        <li class="todo-item" 
            data-text="${taskText}" 
            data-details="${taskDetails || "Немає деталей"}">
          <span>${taskText}</span>
          <button class="delete-btn">×</button>
        </li>
      `);

      $("#todo-list").append(newItem);
      $("#newTask").val("");
    }
  });

  $("#newTask").keypress(function (e) {
    if (e.which === 13) {
      $("#addTask").click();
    }
  });
});
