namespace TaskManager.Data
{
    public class taskClass
    {
        public string Task { get; set; } = string.Empty;
        public bool IsComplete { get; set; } = false;
        public string Priority { get; set; } = "Low"; // Default priority

        public taskClass()
        {
            Task = string.Empty;
            IsComplete = false;
            Priority = "Low";  // Default priority set to Low
        }

        public void AddTask(string task, string priority)
        {
            this.Task = task;
            this.IsComplete = false;
            this.Priority = priority;
        }
    }
}
