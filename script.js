<script>
    document.getElementById(searc)
document.getElementById("searchBar").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const items = document.querySelectorAll("#itemList .item");

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.classList.toggle("hidden", !text.includes(query));
  });
});
</script>