import { SkillSheet } from "../types/SkillSheet";

// スキル分析シート表示用のコンポーネント
const SkillAnalysisSheet = ({ data }: { data: SkillSheet }) => {
  // スキルレベル表示のためのヘルパー関数 - レベル表示を削除
  const renderSkillLevel = (_level: number) => {
    // レベルの表示はしない（空のspanを返す）
    return <span></span>;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-luxury-200">
      {/* ヘッダー部分 */}
      <div className="flex items-center justify-between bg-luxury-800 text-white p-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1">
            {data.engineerName}さんのスキル分析シート
          </h3>
          <p className="text-sm text-luxury-100 mt-2">
            <span className="font-semibold">案件：</span>
            {data.jobRequirement.title}
          </p>
          <p className="text-sm text-luxury-100">
            {data.jobRequirement.description}
          </p>
        </div>
      </div>

      {/* スキル分析コンテンツ */}
      <div className="p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <h4 className="font-bold text-lg text-luxury-700 mb-3 border-b border-luxury-200 pb-1">
              必須スキル
            </h4>
            <div className="flex flex-wrap gap-2">
              {data.jobRequirement.requiredSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-luxury-100 text-luxury-700 px-3 py-1 rounded-md text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg text-luxury-700 mb-3 border-b border-luxury-200 pb-1">
              歓迎スキル
            </h4>
            <div className="flex flex-wrap gap-2">
              {data.jobRequirement.preferredSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-luxury-50 text-luxury-500 px-3 py-1 rounded-md text-sm border border-luxury-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-luxury-200 pt-4">
          <h4 className="font-bold text-xl text-luxury-800 mb-4">スキル評価</h4>

          {/* フロントエンドスキル */}
          <div className="mb-5">
            <h5 className="font-bold text-base text-luxury-700 mb-2">
              フロントエンドスキル
            </h5>
            <div className="space-y-2 pl-4">
              {data.engineerEvaluation.frontendSkills.map((skill, idx) => (
                <div key={idx} className="border-b border-luxury-100 pb-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    {renderSkillLevel(skill.level)}
                  </div>
                  <p className="text-sm text-luxury-600 mt-1">
                    {skill.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* バックエンドスキル */}
          <div className="mb-5">
            <h5 className="font-bold text-base text-luxury-700 mb-2">
              バックエンドスキル
            </h5>
            <div className="space-y-2 pl-4">
              {data.engineerEvaluation.backendSkills.map((skill, idx) => (
                <div key={idx} className="border-b border-luxury-100 pb-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    {renderSkillLevel(skill.level)}
                  </div>
                  <p className="text-sm text-luxury-600 mt-1">
                    {skill.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* DevOpsスキル（存在する場合のみ表示） */}
          {data.engineerEvaluation.devOpsSkills &&
            data.engineerEvaluation.devOpsSkills.length > 0 && (
              <div className="mb-5">
                <h5 className="font-bold text-base text-luxury-700 mb-2">
                  DevOpsスキル
                </h5>
                <div className="space-y-2 pl-4">
                  {data.engineerEvaluation.devOpsSkills.map((skill, idx) => (
                    <div key={idx} className="border-b border-luxury-100 pb-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        {renderSkillLevel(skill.level)}
                      </div>
                      <p className="text-sm text-luxury-600 mt-1">
                        {skill.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* ソフトスキル（存在する場合のみ表示） */}
          {data.engineerEvaluation.softSkills &&
            data.engineerEvaluation.softSkills.length > 0 && (
              <div className="mb-5">
                <h5 className="font-bold text-base text-luxury-700 mb-2">
                  ソフトスキル
                </h5>
                <div className="space-y-2 pl-4">
                  {data.engineerEvaluation.softSkills.map((skill, idx) => (
                    <div key={idx} className="border-b border-luxury-100 pb-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        {renderSkillLevel(skill.level)}
                      </div>
                      <p className="text-sm text-luxury-600 mt-1">
                        {skill.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* 総合評価 */}
          <div className="bg-luxury-50 p-4 rounded-lg border border-luxury-200">
            <h4 className="font-bold text-lg text-gold-DEFAULT mb-2">
              総合評価
            </h4>
            <p className="text-sm text-luxury-700 leading-relaxed">
              {data.engineerEvaluation.overallComment}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillAnalysisSheet;
