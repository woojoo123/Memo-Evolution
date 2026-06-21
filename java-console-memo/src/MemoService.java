import java.util.ArrayList;
import java.util.List;

public class MemoService {
    private List<Memo> memos = new ArrayList<>();

    public void addMemo(String title, String content) {
        Memo memo = new Memo(title, content);
        memos.add(memo);
    }

    public List<Memo> getMemos() {
        return memos;
    }

    public void editMemo(int index, String newTitle, String newContent) {
        Memo updatedMemo = new Memo(newTitle, newContent);
        memos.set(index, updatedMemo);
    }

    public void deleteMemo(int index) {
        memos.remove(index);
    }

    public boolean isEmpty() {
        return memos.isEmpty();
    }

    public int size() {
        return memos.size();
    }
}
