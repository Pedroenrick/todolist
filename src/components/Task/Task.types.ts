export type TaskProps = {
  id: number;
  title: string;
  finished: boolean;
  deleteTask: (id: number) => void;
};
