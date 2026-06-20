import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<String[]> memos = new ArrayList<>();
        boolean running = true;

        while (running) {
            System.out.println("===== 메모장 =====");
            System.out.println("1. 메모 작성");
            System.out.println("2. 메모 목록 보기");
            System.out.println("3. 메모 수정");
            System.out.println("4. 메모 삭제");
            System.out.println("0. 종료");
            System.out.print("메뉴 선택: ");

            int menu = Integer.parseInt(scanner.nextLine());
            if (menu == 1) {
                System.out.println("제목을 입력해 주세요");
                String title = scanner.nextLine();
                System.out.println("내용을 입력해 주세요");
                String content = scanner.nextLine();
                String[] memo = {title, content};
                memos.add(memo);
                System.out.println("저장 완료되었습니다.");

            } else if (menu == 2) {
                if (memos.isEmpty()) {
                    System.out.println("작성된 메모가 없습니다.");
                } else {
                    for (int i = 0; i < memos.size(); i++) {
                        String[] memo = memos.get(i);

                        System.out.println((i + 1) + ". " + memo[0]);
                        System.out.println(memo[1]);
                    }
                }

            } else if (menu == 3) {
                if (memos.isEmpty()) {
                    System.out.println("수정할 메모가 없습니다.");
                } else {
                    System.out.print("수정할 메모 번호: ");
                    int memoNumber = Integer.parseInt(scanner.nextLine());
                    int index = memoNumber - 1;

                    if (index < 0 || index >= memos.size()) {
                        System.out.println("올바른 메모 번호를 입력하세요");
                    } else {
                        System.out.println("새 제목: ");
                        String newTitle = scanner.nextLine();

                        System.out.println("새 내용: ");
                        String newContent = scanner.nextLine();

                        String[] updateMemo = {newTitle, newContent};
                        memos.set(index, updateMemo);

                        System.out.println("메모가 수정되었습니다.");
                    }

                }
            } else if (menu == 4) {
                if (memos.isEmpty()) {
                    System.out.println("삭제할 메모가 없습니다.");
                } else {
                    System.out.print("수정할 메모 번호: ");
                    int memoNumber = Integer.parseInt(scanner.nextLine());
                    int index = memoNumber - 1;

                    if (index < 0 || index >= memos.size()) {
                        System.out.println("올바른 메모 번호를 입력하세요");
                    } else {
                        memos.remove(index);
                        System.out.println("메모가 삭제되었습니다.");
                    }
                }
            } else if (menu == 0) {
                running = false;
                System.out.println("프로그램을 종료합니다.");
            } else {
                System.out.println("올바른 메뉴 번호를 입력하세요.");
            }

        }
    }
}
