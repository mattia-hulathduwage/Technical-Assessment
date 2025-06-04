PS C:\Users\mwath\Downloads\test-app\test-app> git pull origin main --rebase
>> git push -u origin main
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
Unpacking objects: 100% (3/3), 883 bytes | 98.00 KiB/s, done.
From https://github.com/mattia-hulathduwage/Technical-Assessment
 * branch            main       -> FETCH_HEAD
 * [new branch]      main       -> origin/main
Auto-merging README.md
CONFLICT (add/add): Merge conflict in README.md
error: could not apply eeaa000... Initialize project using Create React App
hint: Resolve all conflicts manually, mark them as resolved with
hint: "git add/rm <conflicted_files>", then run "git rebase --continue".
hint: You can instead skip this commit: run "git rebase --skip".
hint: To abort and get back to the state before "git rebase", run "git rebase --abort".       
hint: Disable this message with "git config set advice.mergeConflict false"
Could not apply eeaa000... Initialize project using Create React App
To https://github.com/mattia-hulathduwage/Technical-Assessment.git
 ! [rejected]        main -> main (non-fast-forward)
error: failed to push some refs to 'https://github.com/mattia-hulathduwage/Technical-Assessment.git'
hint: Updates were rejected because a pushed branch tip is behind its remote
hint: counterpart. If you want to integrate the remote changes, use 'git pull'
hint: before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
PS C:\Users\mwath\Downloads\test-app\test-app> 